// Imports React into our test file.
import React from 'react' 

// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

 // Imports in the component we are going to be testing. 
import Header from '../Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 


it('Header renders content', () => {
    const header = shallow(<Header />)
    expect(header.find('p').text()).toEqual('Hello')
  })

it('navbarid renders content', () => {
    const header = shallow(<Header />)
    expect(header.find('#navbarid').text()).toEqual('<NavbarBrand />')
  })

// it('narbarbrand renders content', () => {
//     const header = shallow(<Header />)
//     expect(header.find('NavbarBrand').text()).toEqual('TinderCat')
//   })

