import React, {useEffect, useState} from 'react';
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField, Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ProductTableComponent from "../components/ProductTableComponent";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {getCategory, getMiniCategory, getProducts} from "../store/actions/allProduct";

function AllProductScreen(props) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryReducer.category);
  const [text_category, setCategory] = useState();
  const mini_categories = useSelector(state => state.categoryReducer.mini_category);
  const [text_mini_category, setMiniCategory] = useState();
  const products = useSelector(state => state.productReducer.products);
  const [viewClick, setViewClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
    dispatch(getMiniCategory());
  }, [])

  const option_mini_category = text_category ? mini_categories.filter(v => v.category === text_category) : mini_categories;
  const filterProducts = viewClick ? searchClick ? products.filter(v => v.mini_category === text_mini_category)
    .filter(y => y.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1) : products
    .filter(v => v.mini_category === text_mini_category) :searchClick ? products
    .filter(y => y.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1) : products;

  return (
    <Container>
      <Grid style={{marginTop: '50px'}} container spacing={3}>
        <Grid item xs={12} md={6}>
          <div style={{display: 'flex', justifyContent: 'start'}}>
            <Typography variant={'h6'} style={{marginRight: 20}}>Товары - 100</Typography>
            <Button variant="outlined" color="success">
              <AddIcon/> Добавить товар
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'end'}}>
          <TextField
            style={{width: 400}}
            label="поиск товаров..."
            onChange={e => setSearchProduct(e.target.value)}
            id="outlined-size-small"
            size="small"
          />
          <Button disabled={searchProduct === ''} onClick={() => setSearchClick(true)} variant={'contained'}
                  color={'primary'}><SearchIcon/></Button>
        </Grid>
      </Grid>
      <div className={'global-card'}>
        <Grid container spacing={3}>
          <Grid item xs={5} md={5}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categories.map(y => y.name)}
              onChange={(e) => setCategory(e.target.outerText)}
              renderInput={(params) => <TextField {...params} label="Все продукты"/>}
            />
          </Grid>
          <Grid item xs={5} md={5}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={option_mini_category.map(y => y.name)}
              onChange={(e) => setMiniCategory(e.target.outerText)}
              renderInput={(params) => <TextField {...params} label="Категории"/>}
            />
          </Grid>
          <Grid item xs={2} md={2} style={{display: 'flex', justifyContent: 'end'}}>
            <Button disabled={!text_category && !text_category} onClick={() => setViewClick(true)} color={'success'}
                    variant="outlined">Показать</Button>
          </Grid>
        </Grid>
        <ProductTableComponent products={filterProducts}/>
      </div>
    </Container>
  );
}

export default AllProductScreen;