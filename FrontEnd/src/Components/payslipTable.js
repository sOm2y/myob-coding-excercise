import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Tag } from 'antd';
import CurrencyFormat from 'react-currency-format';

class PayslipTable extends Component {
  componentDidMount() {
    console.log(this.props.payslipTableData);
  }
  render() {
    const { payslipTableData } = this.props;
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Pay period',
      dataIndex: 'payPeriod',
      key: 'payPeriod',
      render: text => <Tag color="blue" key={text}>{text}</Tag>
    }, {
      title: 'Gross income',
      key: 'grossIncome',
      dataIndex: 'grossIncome',
      render: value => <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    },
    {
      title: 'Income tax',
      dataIndex: 'incomeTax',
      key: 'incomeTax',
      render: value => <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    },
    {
      title: 'Net income',
      dataIndex: 'netIncome',
      key: 'netIncome',
      render: value => <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    },
    {
      title: 'Super',
      dataIndex: 'super',
      key: 'super',
      render: value => <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    }
    ];

    return (
      <Table rowKey={record => record.name} columns={columns} dataSource={payslipTableData} />
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    payslipTableData: state.PayslipReducer.payslipTableData,
  };
};

const mapDispatchToProps = {

};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayslipTable);