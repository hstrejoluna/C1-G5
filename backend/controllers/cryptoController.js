const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const axios = require("axios");

exports.getCrypto = async (req, res, next) => {
  const cryptos = {
    BTC: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=btc&tsyms=usd",
    ETH: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=eth&tsyms=usd",
    DOGE: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=&tsyms=usd",
  };

  const btc = await axios.get(cryptos.BTC);
  const eth = await axios.get(cryptos.ETH);
  const doge = await axios.get(cryptos.DOGE);

  try {

    console.log("precio es"+btc.data.DISPLAY.BTC.USD.PRICE);
    // call stored procedure
    db.query(
      "CALL getCrypto(:name :currency :price :highday :lowday :changepct24hour :lastupdate)",
      {
        replacements: {
          name: btc.data.DISPLAY.BTC.USD.FROMSYMBOL,
          currency: btc.TOSYMBOL,
          price: btc.PRICE,
          highday: btc.HIGHDAY,
          lowday: btc.LOWDAY,
          changepct24hour: btc.CHANGEPCT24HOUR,
          lastupdate: btc.LASTUPDATE,
        },
      }
    );
    db.query(
      "CALL getCrypto(:name :currency :price :highday :lowday :changepct24hour :lastupdate)",
      {
        replacements: {
          name: eth.data.DISPLAY.BTC.USD.FROMSYMBOL,
          currency: eth.TOSYMBOL,
          price: eth.PRICE,
          highday: eth.HIGHDAY,
          lowday: eth.LOWDAY,
          changepct24hour: eth.CHANGEPCT24HOUR,
          lastupdate: eth.LASTUPDATE,
        },
      }
    );
    db.query(
      "CALL getCrypto(:name :currency :price :highday :lowday :changepct24hour :lastupdate)",
      {
        replacements: {
          name: doge.NAME,
          currency: doge.TOSYMBOL,
          price: doge.PRICE,
          highday: doge.HIGHDAY,
          lowday: doge.LOWDAY,
          changepct24hour: doge.CHANGEPCT24HOUR,
          lastupdate: doge.LASTUPDATE,
        },
      }
    );
    res.json({ message: "Crypto data updated successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.newCrypto = async (req, res, next) => {
  try {
    await crypto.save();
    res.json({ message: "Crypto added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showCryptos = async (req, res, next) => {
  try {
    const cryptos = await Cryptos.find({});
    res.json(cryptos);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showCrypto = async (req, res, next) => {
  const crypto = await Cryptos.findById(req.params.idCrypto);

  if (!crypto) {
    res.json({ message: "Crypto doesn't exists" });
    next();
  }

  res.json(crypto);
  return;
};

exports.updateCrypto = async (req, res, next) => {
  try {
    const crypto = await Cryptos.findOneAndUpdate(
      { _id: req.params.idCrypto },
      req.body,
      {
        new: true,
      }
    );
    res.json(crypto);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteCrypto = async (req, res, next) => {
  try {
    await Cryptos.findOneAndDelete({ _id: req.params.idCrypto });
    res.json({ message: "Crypto has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
