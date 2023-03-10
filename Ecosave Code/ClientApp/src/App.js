import React, { Component } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Avatar from '@mui/material/Avatar';

const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((response) => response.json())
        .then((data) => console.log(data))
};

getPokemon()

const imageSrc = require('https://cdn.vox-cdn.com/thumbor/lWOGzsPeAD6YzEVVNH001nrSqPM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24458108/captain_pikachu.jpg')

class pokemonClass {
    constructor(abilities, base_experience, forms, game_indices, height, held_items, id, is_default, location_area_encounters, moves, name, order, past_types, species, sprites, stats, types, weight) {
        this.abilities = abilities
        this.base_experience = base_experience
        this.forms = forms
        this.game_indices = game_indices
        this.height = height
        this.held_items = held_items
        this.is_default = is_default
        this.location_area_encounters = location_area_encounters
        this.moves = moves
        this.name = name
        this.order = order
        this.past_types = past_types
        this.species = species
        this.sprites = sprites
        this.stats = stats
        this.types = types
        this.weight = weight
    }
}
export default class App extends Component {
 
    render() {
        
        
    return (
        <div
            className= "poke-search"
        >
            <h1>Hello Pokeworld</h1>            
            <input type="text" id="pokemon" name="pokemone" placeholder="Search for Pokemon"></input>
            <h3>Array of Pokemon's Searched</h3>
            <ol>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} onClick={() => {console.log("Pokemon Clicked")}}/>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} onClick={() => { console.log("Pokemon Clicked") }}/>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} onClick={() => { console.log("Pokemon Clicked") }}/>
            </ol>
            <button
                onClick={() => { console.log("Button clicked") }}>
                    Submit
            </button>
            </div>
    );
  }
}
