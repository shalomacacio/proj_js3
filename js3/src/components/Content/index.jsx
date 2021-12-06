import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { Col, Container, Row, Table} from "react-bootstrap";
import Sidebar from "../Sidebar";
import Moment from "moment";
import "./style.css";

const Content = (props) => {

    const [inadimplencias, setInadimplencias] =  useState();

    useEffect( ()=>{
        api.get("faturas/inadimplencias/12")
        .then((res) => { 
            setInadimplencias(res.data);
            console.log(res.data)
          } 
        )
        .catch((err)=>{
            console.log("Erro:"+ err)
        });

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row>
            <Col md="1" >
                <Sidebar />
            </Col>
            <Col md="11" >
                <Table responsive size="xs" >
                    <thead>
                        <tr>
                            <th>Telefone</th>
                            <th>Cliente</th>
                            <th>Contrato</th>
                            <th>Ativação</th>
                            <th>Endereço</th>
                            <th>Bairro</th>
                            <th>Unidade</th>
                            <th>Vencimento</th>
                            <th>Dias</th>
                            <th>Valor</th>
                            <th>Can Aberto</th>
                            <th>Dt Ticket</th>
                            <th>Status Cob</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* TELEFONE	CLIENTE	CONTRATO	ATIVAÇÃO	ENDEREÇO	BAIRRO	UNIDADE	VENCIMENTO	DIAS	VALOR	CAN ABERTO	DT TICKET	STATUS COB */}
                        {inadimplencias?.map( (fatura, i) => (
                            <tr>
                                <td key={i}> {fatura.fone01} {fatura.fone02?'|'+ fatura.fone02 : null } {fatura.contato?'|'+ fatura.contato : null } </td>
                                <td key={i}> {fatura.nome_razaosocial} </td>
                                <td key={i}> {fatura.codcontrato} </td> 
                                <td key={i} style={{"width" : "5%"}}> { Moment(fatura.dt_ativacao).format('DD-MM-YYYY')} </td>
                                <td key={i}> {fatura.logradouro} </td> 
                                <td key={i}> {fatura.bairro} </td> 
                                <td key={i}> {fatura.unidade} </td> 
                                <td key={i} style={{"width" : "5%"}}> { Moment(fatura.data_vencimento).format('DD-MM-YYYY')} </td>
                                <td key={i}> {fatura.dias} </td> 
                                <td key={i}> {fatura.valor_total} </td> 
                                <td key={i} style={{"width" : "5%"}}> { Moment(fatura.dt_ativacao).format('DD-MM-YYYY')} </td>
                                <td key={i} style={{"width" : "5%"}}> { Moment(fatura.dt_ativacao).format('DD-MM-YYYY')} </td>
                                <td key={i}> {fatura.classificacao} </td> 
                            </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
} 

export default Content;