import React, { Component } from 'react';

import './recipe.css'

class Recipe extends Component {
    constructor() {
        super()

        this.availableIcons = [
            'youtube'
        ]
    }

    // terminar logica
    /* _getIconByURL = (url) => {
        const icon = this.availableIcons.find(icon => icon.substring(url))
        return icon;
    } */

    showVideo = (videoUrl) => {
        console.log(videoUrl)
    }

    render() {
        //const iconPath = this._getIconByURL(this.props.url);

        const videoUrl = this.props.url;

        return (
            <tr className="recipeItem" onClick={ () => this.showVideo(videoUrl) }>
                <td className="recipeItem__info">
                    <img className="recipeItem__img" 
                         src="http://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/youtube-icon.png"
                         alt="icon url"/>
                </td>
                <td className="recipeItem__info">{ this.props.name }</td>
                <td className="recipeItem__info">
                    <a className="recipeItem__link" href={ videoUrl }>{ videoUrl }</a>
                </td>
            </tr>   
        )
    }
}

export default Recipe;