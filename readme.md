
# Rock Garden

A Redux inspired state container for use in `requestAnimationFrame`. Rock Garden trades away some of Redux's features and developer friendliness for increased performance. 

## Installation and Quick Start

`npm install rock-garden --save`

## Motivation

- redux is fantastic

- no precision in subscribing to redux events
- redux message objects: allocating those on a render loop isn't going to make you happy
- the props merge object

## Features and Philosophy

Familiarity with Redux is an asset.

### Single State Atom
### Immutable Trunk, Mutable Leaves
- you can opt out with {}

### 'Pseudo Reducers'

### Action Factories
- re-use your message objects
- also optional


### Zero Allocations as a runtime goal
after init anyways
consider all those three.js apps as the gold standard: no allocations. 
gc is your enemy

### what you keep
- disciplined, defined action -> reducer -> store change -> message update cycle

### what you lose
- time travel
- immutability
- pure functions for updates

## Usage


## Q&A
-should I use this? only if you're comfortable reading the source

## Todos

+ get setup with babel!

- immutable tree node
- hash to immutable tree struct
- sub unsub mechanism, integrated into tree nodes
- dispatch
- dispatch while dispatching error catcher
- name + value message builder, with re-usable container
- pub sub for reducers, per message
- react integration?
- batched dispatches

- license? lgpl?
- benchmarks
- tests
