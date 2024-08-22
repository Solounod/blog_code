import {connect} from 'react-redux'


function Alert ({ alert }) {
    const displayAlert = () => {
        if (alert !== null){
            return (
                <div className={`rounded bg-${alert.alertType} p-2`}>
                <div className=" d-flex justify-content-center">
                    <div className="ml-3">
                    <p className={`fw-bold text-light`}>{alert.msg}</p>
                    </div>
                </div>
                </div>
            )
        } else {
            return(
                <></>
            )
        }
    }

    return (
        <>
            {displayAlert()}
        </>
    )
}

const mapStateToProps = state => ({
    alert: state.Alert.alert
})

export default connect(mapStateToProps)(Alert)