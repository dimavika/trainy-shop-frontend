import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#">Back to top</a>
                        </p>
                        <p>Dimas</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;