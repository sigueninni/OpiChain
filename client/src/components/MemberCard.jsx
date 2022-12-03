import * as React from 'react';
import '../css/component/membercard.css';
import useEth from "../contexts/EthContext/useEth";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { ShowChart } from '@mui/icons-material';
import { useState, useEffect } from "react";

function CardPerson({ address }) {

    const { state: { contractSBT,accounts,owner } } = useEth();

    useEffect(() => {
    },[contractSBT,accounts]);

    return (
        <div key="{address}" id="CardPerson_main">
            {/* {accounts && <pre>{accounts[0]} - {owner}</pre>} */}
            <Card >
                <CardHeader
                    avatar={
                        <Avatar src="https://mui.com/static/images/avatar/2.jpg">
                        </Avatar>
                    }


                    title={address}
                    subheader={ accounts && owner === accounts[0] ? "OpiChain owner" : "Opichain member"}
                />

                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <div id="membercardWallet"><ShowChart fontSize="large" /></div>
                        <div id="membercardBalance">10000 OPI</div>
                    </Stack>

                </CardContent>
            </Card>
        </div>
    );
}

export default CardPerson;