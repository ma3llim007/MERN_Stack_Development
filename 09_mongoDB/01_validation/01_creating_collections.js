db.createCollection("nonfiction", {
    validator: {
        $jsonSchema: {
            required: ['name', 'price'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'Must Be A String And Required'
                },
                price: {
                    bsonType: 'number',
                    description: 'Must Be A Number And Required'
                }
            }
        }
    }
})