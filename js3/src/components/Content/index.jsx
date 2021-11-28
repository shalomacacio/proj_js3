import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { Container, Table} from "react-bootstrap";


const Content = (props) => {

    const [inadimplencias, setInadimplencias] =  useState();

    useEffect( ()=>{
        api.get("faturas/inadimplencias/12")
        .then((res) => { 
            setInadimplencias(res.data);
            // console.log(res.data)
          } 
        )
        .catch((err)=>{
            console.log("Erro:"+ err)
        });

        

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Fatura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {inadimplencias?.map( (fatura) => (<td key={fatura.codfatura}> {fatura.codfatura} </td>))}
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
} 

export default Content;