import React from 'react';
import Product from './Product';


/* к сожалению, поиск не работает */


export default ({ title }) => {
  const dataSearch = e => {};
  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        onChange={dataSearch}
      />
    </div>
  );
};


const dataSearch = e => {
  const value = e.target.value.toLowerCase();

  const filter = data.filter(Product => {
    return Product.title.toLowerCase().includes(value);
  });

  update({
    data: filter,
    active: 0,
    term: value
  });
};


loadData() {
  load(this.props.data).then(products => {
    this.initialData = JSON.parse(products);
    this.setState({
      data: this.initialData
    });
  });
}
