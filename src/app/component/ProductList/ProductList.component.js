/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { ProductType } from '@type/Product';
import Product from '@util/Product/Product';
import ProductListQuery from '@query/ProductList.query';

import { LANG_CODE_LV } from '@component/Starters/Starters.config';

import {
    fetchMenuRequest,
    fetchMenuSuccess,
    fetchMenuFail
} from '@store/MenuList/MenuList.action';

import './ProductList.style.scss';

export const mapStateToProps = (state) => ({
    loading: state.menuList.loading,
    foodMenu: state.menuList.foodMenu
});

export const mapDispatchToProps = (dispatch) => ({
    fetchMenuRequest: () => dispatch(fetchMenuRequest()),
    fetchMenuSuccess: (foodMenu) => dispatch(fetchMenuSuccess(foodMenu)),
    fetchMenuFail: (error) => dispatch(fetchMenuFail(error))
});

class ProductList extends React.Component {
  static propTypes = {
      loading: PropTypes.bool,
      t: PropTypes.func.isRequired,
      languageCode: PropTypes.string.isRequired,
      foodMenu: PropTypes.arrayOf(ProductType),
      fetchMenuRequest: PropTypes.func.isRequired,
      fetchMenuSuccess: PropTypes.func.isRequired,
      fetchMenuFail: PropTypes.func.isRequired
  };

  static defaultProps = {
      loading: true,
      foodMenu: []
  }

  constructor(props) {
      super(props);

      this.getProductList = this.getProductList.bind(this);
      this.renderTitle = this.renderTitle.bind(this);
      this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
      const { fetchMenuRequest } = this.props;
      fetchMenuRequest();

      this.getProductList()
          .then((response) => {
              const {
                  fetchMenuSuccess
              } = this.props;
              const {
                  data: {
                      products = []
                  } = {}
              } = response;

              if (!products || !products.length) {
                  return;
              }

              fetchMenuSuccess(products);
          })
          .catch((error) => {
              const { fetchMenuFail } = this.props;
              fetchMenuFail(error);
          });
  }

  componentDidUpdate(prevProps) {
      const {
          languageCode: prevLanguageCode = ''
      } = prevProps;
      const {
          loading,
          languageCode
      } = this.props;

      if (prevLanguageCode !== languageCode) {
          if (!loading) {
              this.getProductList()
                  .then((response) => {
                      const {
                          data: {
                              products = []
                          } = {}
                      } = response;

                      const { fetchMenuSuccess } = this.props;
                      fetchMenuSuccess(products);
                  })
                  .catch((error) => {
                      const fetchMenuFail = this.props;
                      fetchMenuFail(error);
                  });
          }
      }
  }

  getProductList() {
      const {
          languageCode = ''
      } = this.props;

      return ProductListQuery.getProductList(languageCode) || {};
  }

  renderProducts() {
      const {
          t,
          languageCode,
          loading,
          foodMenu
      } = this.props;

      if (loading) {
          return t('loading');
      }

      return foodMenu.map((product) => {
          const {
              _id = '',
              language = ''
          } = product;

          if (languageCode !== language) {
              return null;
          }

          return <Product key={ _id } product={ product } />;
      });
  }

  renderTitle() {
      const {
          t,
          languageCode
      } = this.props;

      return (
          <h3>
            { languageCode === LANG_CODE_LV ? (
                <div className="parallax-headline">{ t('our') }</div>
            ) : null }
            <div className="parallax-title">{ t('food-menu.title') }</div>
          </h3>
      );
  }

  render() {
      const { t } = this.props;

      return (
          <div className="FoodMenu">
            <section className="food-menu">
              <div className="section-title">
                { this.renderTitle() }
              </div>
            </section>
            <div className="container">
              <h4 className="custom-tac">{ t('food-menu.day-menus') }</h4>
              <div className="container">
                  { this.renderProducts() }
                <div className="row justify-content-between custom-mg-25" />
              </div>
            </div>
          </div>
      );
  }
}

export default
connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProductList));
