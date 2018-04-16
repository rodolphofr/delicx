import React, { Component } from 'react'

import './recipesTable.css'

class RecipesTable extends Component {
    render() {
        return (
            <table className="tableRecipes">
                <thead className="tableRecipes__head">
                    <tr>   
                        <th></th>
                        <th>Nome da delícia</th>
                        <th>Onde encontrar</th>
                    </tr>
                </thead>
                <tbody>
                   { this.props.children }
                </tbody>
            </table>
        )
    }
}

export default RecipesTable;