import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

class Tab extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div className="tab">
          <Menu pointing>
            <NavLink to='/'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            </NavLink>
            <NavLink to='/characters'>
            <Menu.Item
              name='characters'
              active={activeItem === 'characters'}
              onClick={this.handleItemClick}
            />
            </NavLink>
            <NavLink to='/location'>
            <Menu.Item
              name='location'
              active={activeItem === 'location'}
              onClick={this.handleItemClick}
            />
            </NavLink>
            <NavLink to='/episodes'>
              <Menu.Item
              name='episodes'
              active={activeItem === 'episodes'}
              onClick={this.handleItemClick}
            />
            </NavLink>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }
  
  export default Tab;