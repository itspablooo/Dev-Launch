const express = require('express');
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const path = require('path');
const stripe = require('stripe')('sk_te1st_51OfD09H9p4ncyPKt0Arf8JjiLc0dGGGc2fTAciY1xFEYf14Cadb4Sk4rVGyv2vUBxox1nvtFGcJVQzLtF0HK8WDz00BXGbjM4K');
const bodyParser = require('body-parser');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schema')

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/graphql', expressMiddleware(server));

app.post('/charge', async (req, res) => {
  try {
    const { amount, currency, token } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token,
    });

    res.json({ success: true, charge });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
});

const startApolloServer = async () => {
    await server.start();
}

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  startApolloServer();