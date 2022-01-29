import React, { useEffect, useState } from 'react';
import { Card, HorizontalContainer, Content, Filter, FilterForm , FormBtn, FormControl, Table } from './SlaGarantiaElements.js'
import api from '../../../../../services/api';

const SlaGarantia = () => {
  const [dados, setDados] = useState([]);

  useEffect( () => {
    api.get("/faturas/inadimplencias/").then( (res) => {
      setDados(res.data);
    });
  } , []);
  
  return(
  <>
  <HorizontalContainer>
    <Filter>
        <h3> Filtros: </h3>
      <FilterForm>

        <FormControl>
          <label>Data Abertura</label>
          <input type={'date'} name='dt_inicio' id='dt_inicio'/>
        </FormControl>

        <FormBtn>
          Cuida !
        </FormBtn>
        
      </FilterForm>
    </Filter>
    <Filter>
      <FormBtn green> Exportar Excel </FormBtn>
    </Filter>
    
  </HorizontalContainer>

    <Content>

      <Card>
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
