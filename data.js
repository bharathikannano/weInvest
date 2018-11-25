const express = require('express')
const app = express()
const port = 5555

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => res.send([{
    id: 1,
    name: 'HONGKONG TECHNOLOGY',
    volatility: '26.8%',
    mean_return: '2.96%',
    currency: 'SGD',
    minimum:'170,000',
    constituents: [{
            weight: '3%',
            instrument: {
                id: 1,
                name: 'CSX corp',
                type: 'Equity'
            }
        },
        {
            weight: '17%',
            instrument: {
                id: 2,
                name: 'cummins Inc',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 3,
                name: 'Eaton Corp PLC',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 4,
                name: 'Fedx corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 5,
                name: 'Haris corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 6,
                name: 'Norfolk Southern Corp',
                type: 'Bond'
            }
        },
        {
            weight: '5%',
            instrument: {
                id: 7,
                name: 'General Dynamics',
                type: 'Bond'
            }
        },
        {
            weight: '15%',
            instrument: {
                id: 8,
                name: 'hal',
                type: 'Bond'
            }
        },
        {
            weight: '20%',
            instrument: {
                id: 10,
                name: 'USD CASH',
                type: 'CASH'
            }
        }
    ]
},
{
    id: 2,
    name: 'HONGKONG/CHINA TECHNOLOGY',
    volatility: '28.1%',
    mean_return: '2.96%',
    currency: 'HKD',
    minimum: '170,000',
    constituents: [{
            weight: '3%',
            instrument: {
                id: 1,
                name: 'CSX corp',
                type: 'Equity'
            }
        },
        {
            weight: '17%',
            instrument: {
                id: 2,
                name: 'cummins Inc',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 3,
                name: 'Eaton Corp PLC',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 4,
                name: 'Fedx corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 5,
                name: 'Haris corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 6,
                name: 'Norfolk Southern Corp',
                type: 'Bond'
            }
        },
        {
            weight: '5%',
            instrument: {
                id: 7,
                name: 'General Dynamics',
                type: 'Bond'
            }
        },
        {
            weight: '15%',
            instrument: {
                id: 8,
                name: 'hal',
                type: 'Bond'
            }
        },
        {
            weight: '20%',
            instrument: {
                id: 10,
                name: 'USD CASH',
                type: 'CASH'
            }
        }
    ]
},
{
    id: 3,
    name: 'US TECH LEADERS',
    volatility: '19.84%',
    mean_return: '2.96%',
    currency: 'SGD',
    minimum: '3,500',    
    constituents: [{
            weight: '3%',
            instrument: {
                id: 1,
                name: 'CSX corp',
                type: 'Equity'
            }
        },
        {
            weight: '17%',
            instrument: {
                id: 2,
                name: 'cummins Inc',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 3,
                name: 'Eaton Corp PLC',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 4,
                name: 'Fedx corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 5,
                name: 'Haris corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 6,
                name: 'Norfolk Southern Corp',
                type: 'Bond'
            }
        },
        {
            weight: '5%',
            instrument: {
                id: 7,
                name: 'General Dynamics',
                type: 'Bond'
            }
        },
        {
            weight: '15%',
            instrument: {
                id: 8,
                name: 'hal',
                type: 'Bond'
            }
        },
        {
            weight: '20%',
            instrument: {
                id: 10,
                name: 'USD CASH',
                type: 'CASH'
            }
        }
    ]
},
{
    id: 4,
    name: 'SINGAPORE REITS',
    volatility: '9.05%',
    mean_return: '2.96%',
    currency: 'SGD',
    minimum: '6,000',
    constituents: [{
            weight: '3%',
            instrument: {
                id: 1,
                name: 'CSX corp',
                type: 'Equity'
            }
        },
        {
            weight: '17%',
            instrument: {
                id: 2,
                name: 'cummins Inc',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 3,
                name: 'Eaton Corp PLC',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 4,
                name: 'Fedx corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 5,
                name: 'Haris corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 6,
                name: 'Norfolk Southern Corp',
                type: 'Bond'
            }
        },
        {
            weight: '5%',
            instrument: {
                id: 7,
                name: 'General Dynamics',
                type: 'Bond'
            }
        },
        {
            weight: '15%',
            instrument: {
                id: 8,
                name: 'hal',
                type: 'Bond'
            }
        },
        {
            weight: '20%',
            instrument: {
                id: 10,
                name: 'USD CASH',
                type: 'CASH'
            }
        }
    ]
},
{
    id: 5,
    name: 'HONGKONG CUSTOMER',
    volatility: '18.75%',
    mean_return: '2.96%',
    currency: 'SGD',
    minimum: '300,000',
    constituents: [{
            weight: '3%',
            instrument: {
                id: 1,
                name: 'CSX corp',
                type: 'Equity'
            }
        },
        {
            weight: '17%',
            instrument: {
                id: 2,
                name: 'cummins Inc',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 3,
                name: 'Eaton Corp PLC',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 4,
                name: 'Fedx corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 5,
                name: 'Haris corp',
                type: 'Equity'
            }
        },
        {
            weight: '10%',
            instrument: {
                id: 6,
                name: 'Norfolk Southern Corp',
                type: 'Bond'
            }
        },
        {
            weight: '5%',
            instrument: {
                id: 7,
                name: 'General Dynamics',
                type: 'Bond'
            }
        },
        {
            weight: '15%',
            instrument: {
                id: 8,
                name: 'hal',
                type: 'Bond'
            }
        },
        {
            weight: '20%',
            instrument: {
                id: 10,
                name: 'USD CASH',
                type: 'CASH'
            }
        }
    ]
}
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))