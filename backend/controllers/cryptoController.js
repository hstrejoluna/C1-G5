const Cryptos = require("../models/Cryptos");

exports.newCrypto = async (req, res, next) => {
  const crypto = new Cryptos(req.body);
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
