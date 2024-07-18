export default function Account({ card, title, founds }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} (x{card})</h3>
                <p className="account-amount">{founds}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}