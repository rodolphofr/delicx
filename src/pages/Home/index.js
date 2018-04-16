import React, { Component, Fragment } from 'react';
import Widget from '../../components/Widget'
import RecipesTable from '../../components/RecipesTable'
import Recipe from '../../components/Recipe'

class Home extends Component {

    //validar input do usuario

    state = {
        recipe: '',
        videoURL: '',
        recipes: []
    }

    addRecipe = (event) => {
        event.preventDefault();

        const recipe = { name: this.recipe.value, url: this.videoURL.value }
        this.setState({ recipes: [recipe, ...this.state.recipes] })

        event.target.reset()
    }

    render() {
        const recipes = this.state.recipes;

        return (
            <Fragment>
                <h1>delicx</h1>

                <main>
                    <Widget>
                        <form className="formRecipe" onSubmit={ this.addRecipe }>
                            <label className="formRecipe__label" htmlFor="recipe">Receita:</label>
                            <input className="formRecipe__input" type="text" id="recipe" placeholder="Isso... coloca! coloca!"
                                   ref={ inputRecipe => this.recipe = inputRecipe }/>

                            <label className="formRecipe__label" htmlFor="videoURL">URL do vídeo:</label>
                            <input className="formRecipe__input" type="text" id="videoURL" placeholder="Onde que tá a delícia?"
                                  ref={ inputVideoURL => this.videoURL = inputVideoURL }/>

                            <input className="formRecipe__submit" type="submit" id="btnSubmit" value="Adicionar" /> 
                        </form>
                    </Widget>   
                    <RecipesTable>
                        { 
                          recipes.length > 0 &&
                          recipes.map(recipe => 
                                <Recipe key={ recipe.name + recipe.url + 1 } 
                                        name={ recipe.name } 
                                        url={ recipe.url }/>) 
                        }
                    </RecipesTable>       
                </main>      
            </Fragment>
        )
    }

}

export default Home;
