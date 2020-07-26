import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return (
            <div className="details">
                <span>hihi</span>
                 <img src={location.state.img} />
            </div>
        );
        } else {
            return null;
        }
    }
}

export default Detail;