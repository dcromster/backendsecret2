const ejs = require('ejs')
const getTweets = require('@xamgore/get-tweets')
import dec from 'bignum-dec';

const tokens = {
    access_token : '3302551618-X32xP86r1SWdwTbev2zQ4YKtTclQfgEMIoKB1Sj',
    access_token_secret : 'qQrwG3u2Ah3dZ9WJxR3S5quuVx63wEKtAuRkYS7WO53oW',
    consumer_key : 'HlHbTm29kBfiWfjooOjhcCUdr',
    consumer_secret : '6tOYKETK4ieaxW6Oqnjr7fUQcMxTqwvVCTIk2pYHMvDxUACM70'
}

getTweets(tokens, 'backendsecret', dec('1077109862444777472')).then(tweets => {
    console.log(tweets);
  });