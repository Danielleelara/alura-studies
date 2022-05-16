import React, { Component } from 'react'
import Botao from '../Botao'

export default class Form extends Component {
  render() {
    return (
      <Form>
        <div>
          <label id="tarefa" htmlFor="#"></label>
          <input 
          type="text" 
          name="tarefa"
          id="tarefa"
          placeholder='O que você quer estudar'
          required
          />
        </div>
        <div>
        <label htmlFor="#"></label>
          <input 
          type="time" 
          name="tarefa"
          id="tarefa"
          placeholder='O que você quer estudar'
          required
          />
        </div>
        <Botao />
      </Form>

    )
  }
}
