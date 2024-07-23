import Button from '../Button/Button'
import PropTypes from 'prop-types'

const Account = ({
    accountTitle,
    accountId,
    accountBalance,
    accountDescription,
}) => {
    const handleClick = () => {
        console.log('View transactions')
    }

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">
                    Argent Bank {accountTitle} ({accountId})
                </h3>
                <p className="account-amount">${accountBalance}</p>
                <p className="account-amount-description">
                    {accountDescription} Balance
                </p>
            </div>
            <div className="account-content-wrapper cta">
                <Button
                    className="transaction"
                    type="button"
                    handleClick={handleClick}
                    children="View transactions"
                />
            </div>
        </section>
    )
}

Account.propTypes = {
    accountTitle: PropTypes.string,
    accountId: PropTypes.string,
    accountBalance: PropTypes.string,
    accountDescription: PropTypes.string,
}

export default Account
