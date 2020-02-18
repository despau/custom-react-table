import styled from 'styled-components'


export const Styles = styled.div`
  padding: 1rem;
  text-align: center;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      cursor: pointer;
      position: relative;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  
  .pagination {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
  }

  .subrow {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: green;
    height: 3rem;
  }
`