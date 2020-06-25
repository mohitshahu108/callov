import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright: <i style={{ color: "red" }}>MohitShahu</i>
                    |Created with <span style={{ color: "#e25555", fontSize: "20px" }}>&#9829;</span> in INDIA - All Right Reserved.
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;