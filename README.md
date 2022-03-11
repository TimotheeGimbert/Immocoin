<div align='center'>

# ImmoCoin

[![THP Badge](https://raw.githubusercontent.com/Beygs/Beygs/main/assets/the-hacking-project-badge.svg)](https://www.thehackingproject.org/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)<br />
[![nextjs badge](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)

[![Logo](https://raw.githubusercontent.com/Beygs/Beygs/main/assets/Immocoincoin%20(1).png)](https://immocoincoin.herokuapp.com)

[Pitch du projet](#pitch-du-projet) | 
[Liens Utiles](#liens-utiles) | 
[Installation](#installation) | 
[L'Equipe](#lequipe) | 
[Crédits et remerciements](#crédits-et-remerciements)

</div>

## Pitch du projet

Marketplace fictive d'immobilier

## Lien live heroku (production)
Go to [Immocoin](https://immocoincoin.herokuapp.com/)



## Utiliser l'application localement
> Ouvrez un terminal et taper les commandes suivantes :
1. mkdir immocoin
1. cd immocoin
1. git clone git@github.com:TimotheeGimbert/Immocoin-Front-React.git
1. git clone git@github.com:TimotheeGimbert/Immocoin-API-Rails.git
1. cd Immocoin-API-Rails/
1. bundle install
1. touch ./config/master.key
> Placez votre master key dans ./config/master.key
1. rails db:create
1. rails db:migrate
1. rails db:seed
1. si erreur: rails db:reset
1. rails server
> Ouvrez un deuxième terminal avec CTRL+MAJ+E
1. cd ../Immocoin-Front-React/
1. `yarn install`
1. `yarn dev`
1. Go to [http://localhost:3001](http://localhost:3001)


## L'Equipe

- [Pierre Pellegrino](https://github.com/pierre-pellegrino)
- [Anthony Charpenay](https://github.com/talmidiel)
- [Timothée Gimbert](https://github.com/TimotheeGimbert)
- [Boris Gilles](https://github.com/Beygs)

## Crédits et remerciements

Merci à [The Hacking Project](https://www.thehackingproject.org/) et à tous les moussaillons pour cette formation de qualité !

## Liens utiles

[Repo du backend](https://github.com/TimotheeGimbert/Immocoin-API-Rails)
