const StatisticCard = ({ category }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-header">
                    { category.name }
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <label className="font-weight-bold">Incoming</label>
                        <div><span className="badge badge-success">{ category.values.incoming }</span></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <label className="font-weight-bold">Expenses</label>
                        <div><span className="badge badge-danger">{ category.values.expense }</span></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <label className="font-weight-bold">Balance</label>
                        <div><span className="badge badge-primary">{ category.values.balance }</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatisticCard