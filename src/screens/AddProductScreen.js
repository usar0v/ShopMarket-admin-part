import React, {useState} from 'react';
import {Button, Card, Container, Grid, Input, OutlinedInput, TextField, Typography} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {addProducts} from "../store/actions/addProduct";
import {useDispatch} from "react-redux";

function AddProductScreen(props) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null)


  const form = new FormData();
  form.append("mini_category", 12);
  form.append("brand", 'fight');
  form.append("image", selectedFile);
  form.append("colors", JSON.stringify([ 'black', 'blue']));
  form.append("price", 60000);
  form.append("sizes", JSON.stringify([ 'xl', 'l']));
  form.append("rating", 4);
  form.append("status", true);
  form.append("discount", 20);
  form.append("title", 'Куртка с разными цветами');

  console.log( JSON.stringify([ 'black', 'blue']))
  return (
    <Container>
      <Typography variant={'h6'}> ДОБАВИТЬ ТОВАР </Typography>
      <div className={'global-card'}>
        <Grid container>

          <Grid md={3}>
            <label>
              <input type="file" hidden onChange={(e) => setSelectedFile(e.target.files[0])} />
              <Card style={{
                width: 250,
                textAlign: 'center',
                paddingBottom: 30,
                paddingTop: 30,
                backgroundColor: 'rgba(239,239,239,0.75)'
              }}>
                <AddAPhotoIcon style={{color: '#d3d3d3', width: 150, height: 150}}/>
              </Card>
            </label>
          </Grid>
          <Grid md={3}>
            <Grid md={12}>
              <Typography color={'text.secondary'}>Название товара</Typography>
              <OutlinedInput style={{width: 300}} size='small' placeholder="название"/>
            </Grid><br/>
            <div style={{display: 'flex'}}>
              <Grid md={6}>
                <Typography color={'text.secondary'}>Размеры</Typography>
                <OutlinedInput style={{width: 80}} size='small' placeholder="цена"/>
              </Grid>
              <Grid md={6}>
                <Typography color={'text.secondary'}>Цена</Typography>
                <OutlinedInput style={{width: 80}} size='small' placeholder="цена"/>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <Button onClick={() => dispatch(addProducts(form))} variant={'outlined'} color={'success'}>Добавить
        продукт</Button>
    </Container>
  );
}

export default AddProductScreen;