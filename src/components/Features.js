import React from 'react';



export default function FeatureItems(props) {
  console.log('features: ', props.featureList);
  return Object.keys(props.featureList)
    .map(key => {
      const options = props.featureList[key].map((item, index) => {
        const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}
            
            onClick={e => props.updateFeature(key, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>
      });

      return (<div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>)})
}   