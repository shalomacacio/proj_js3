import React, { useEffect, useState } from 'react';
import { Card, CardTitle, HorizontalContainer,  LinkBtn,Content, Filter, Form , FormBtn, FormControl, Table } from './SlaGarantiaElements.js'
import api from '../../../../../services/api';

const SlaGarantia = () => {  

  const [dados, setDados] = useState([]);
  const [form, setForm] = useState({abertura: ""});
  const [dataAbertura, setDataAbertura] = useState(new Date().toISOString().split('T')[0]);

  useEffect( () => {
    api.get("/faturas/inadimplencias/"+dataAbertura).then( (res) => {
      setDados(res.data);
    });
  } , [dataAbertura]);

  const handle = (e) => {
    setForm({abertua: e.target.value});
  }

 const submit = (e) => {
    e.preventDefault();
    setDataAbertura(form.abertua);
 }


  
  return(
  <>
  <HorizontalContainer>
    <Filter>
      <div></div>
    </Filter>

    <Filter>
        <h3> Filtros: </h3>
        
      <Form onSubmit={ (e) => submit(e)} >

        <FormControl>
          <label>Data Abertura</label>
          <input type='date' name='abertura' onChange={ (e) => handle(e) } value={form.abertura}/>

        </FormControl>

        <FormBtn type='submit'>
          Cuida !
        </FormBtn>
        
      </Form>
    </Filter>
    
  </HorizontalContainer>

    <Content>
      <Card>
        <CardTitle>
          <p>Período: { form.abertura }</p>
          <h4> RELATÓRIO: SLA-GARANTIA </h4>
          <LinkBtn green> Exportar Excel </LinkBtn>
        </CardTitle>

        <Table>
          <thead>
            <tr>
              <th> COD. </th>
              <th> CLIENTE </th>
              <th> ABERTURA </th>
              <th> FECHAMENTO </th>
              <th> TIPO </th>
            </tr>
          </thead>
          <tbody>
            {dados.map( (os, index) => (
              <tr key={index}>
                <td>{os.codos}</td>
                <td>{os.nome_razaosocial}</td>
                <td>{(new Date(os.data_abertura)).toLocaleDateString('pt-br')}</td>
                <td>{ os.data_fechamento? (new Date(os.data_fechamento)).toLocaleDateString('pt-br') : null }</td>
                <td>{os.tipo_os}</td>
              </tr>
              )
              )} 
          </tbody>
        </Table>
      </Card>
    </Content>
  </>

  );
};

export default SlaGarantia;
