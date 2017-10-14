import React from 'react';

export class Head extends React.Component{
  render(){
    return(
      <header>
        <div className="container_16">
            <div className="grid_16">
                <div className="header-top clearfix">
                    <h1><a href="index.html"><img src="assets/images/logo.jpg"/></a></h1>
                    <div className="fright">Fight Stress &amp; Find Serenity</div>
                </div>
            </div>
        </div>
        <div className="bg-1">
            <div className="container_16">
                <div className="row">
                    <div className="grid_16">
                        <nav>
                            <ul className="sf-menu">
                                <li className="current"><a href="#main">main</a></li>
                                <li><a href="#about">about us</a>
                                    <ul>
                                        <li><a href="#">history</a></li>
                                        <li><a href="#">staff</a></li>
                                        <li><a href="#">news</a>
                                            <ul>
                                                <li><a href="#">fresh</a></li>
                                                <li><a href="#">archive</a></li>
                                            </ul>
                                        </li>
                                   </ul>
                                </li>
                                <li><a href="#training">training</a></li>
                                <li><a href="#teachers">teachers</a></li>
                                <li><a href="#contacts">contacts</a></li>
                            </ul>
                        </nav>
                        <div className="extra-wrap">
                            <ul className="list-services clearfix">
                                <li><a href="#" className="list-services-1"></a></li>
                                <li><a href="#" className="list-services-2"></a></li>
                                <li><a href="#" className="list-services-3"></a></li>
                                <li><a href="#" className="list-services-4"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
};
