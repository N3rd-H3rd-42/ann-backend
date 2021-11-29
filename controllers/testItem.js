const TestItem = require("../models/testItem");

module.exports = {
  createOne: async (request, response) => {
    const { title, description, thumbnail_url } = request.body;
    const newItem = new TestItem({ title, description, thumbnail_url });

    await newItem
      .save()
      .then((newItem) =>
        response
          .status(201)
          .json({
            message: `Item: ${newItem.title}, successfully added.`,
            newItem: newItem,
          })
      )
      .catch((error) => console.log(error));
  },
  findAll: async (request, response) => {
      const items = await TestItem.find();
      return response.status(200).json({ items: items });
  }
};
