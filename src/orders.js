import React from 'react';
import Chart from "react-google-charts";

function orders(props) {
    return (
        <div>
            <h1>Real time preparation products</h1>
            <h2>Bulk produce items etc</h2>
            Biryani, Dal, Popcorn etc
            <h2>FIFO processing</h2>
            Roti, Pizza, Naan etc<br /><br />

            <h1>Packaged Products</h1>
            Pepsi,Pharmacy,Groceries, Ready goods etc

            <br /><br />
            <br /><br />

            <h1>Example</h1>

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', 'Product Preparation Time',],
                    ['Pizza X2\nq:1  p:2', 4],
                    ['Roti X1\nq:30  p:3', 3],
                    ['Dal X1\nq:15  p:4', 4],
                    ['Pepsi X2\nq:5  p:0.5', 0.5],
                ]}
                options={{
                    title: 'Breakdown of Order Preparation Time',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Total Order Preparation Time(in minutes): 12\nq:quantity threshold\np:prep time ',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Product Type',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />

(Math.floor(item.getQuantity()/item.getQuantityThreshold())
* 
newItem.prep_time()


        </div>
    );
}

export default orders;