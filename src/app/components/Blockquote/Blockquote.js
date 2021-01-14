import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.renderBlockqouteEntities = this.renderBlockqouteEntities.bind(this);
  }

  renderBlockqouteEntities() {
    const { t } = this.props;

    return (
      Object.entries(t('blockquote', { returnObjects: true })).map((item) => {
        const { id } = item;
        return <p key={id} className={item[0]}>{ item[1] }</p>;
      })
    );
  }

  render() {
    return (
      <div className="container">
        <blockquote className="custom-tac">
          { this.renderBlockqouteEntities() }
        </blockquote>
      </div>
    );
  }
}

Blockquote.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Blockquote);
