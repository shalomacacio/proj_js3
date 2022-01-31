import styled from "styled-components";

export const Content = styled.main`
    background: #eee;
    height: auto;
    padding: 10px;
`
export const HorizontalContainer = styled.div`
    background: #ebebeb;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #dbdbdb;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 20px;
    font-size: 14px;
    text-transform: uppercase;

    h3 {
        color: #838383;
        font-size: 16px;
        
    }
`;

export const FilterForm = styled.form`
    padding: 10px;
    display: flex;
`
export const FormControl = styled.div`
    label{
        color: #5A8DEE;
        padding: 0px 10px;
    }
    input{
        border: 1px solid #ced4da;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
        color: #838383;
    }
`
export const FormBtn = styled.button`
    background: ${props => props.green ? "#29b929" : "#5A8DEE"};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    margin-left: 20px;
    margin-right: 10px;
    color: #fff ;
    border: none;
    border-radius: 0.25rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    cursor: pointer;
`;
export const LinkBtn = styled.button`
    background: ${props => props.green ? "#29b929" : "#5A8DEE"};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    margin: 10px;
    color: #fff ;
    border: none;
    border-radius: 0.25rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    cursor: pointer;
`;
export const Card = styled.div`
    position: relative;
    background: #fff;
    padding: 10px 10px 10px 10px;
    border-radius: 4px;
`;
export const CardTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    h1, h2, h3, h4 {
        color: #838383;
    }
`;
export const Table = styled.table`
    position: inherit;
    border: 1px solid #eee;
    width: 100%;
    border-collapse: collapse;

    th, tr, td{
        border: 1px solid #d3d3d3;
        padding: 5px;
        font-size: 0.7rem;
        text-align: left;
    }

    th {
        background: #eee;
    }
    tr:nth-child(even){
        background: #eee;
    }
`;