describe('Testing demo.js', () => {
    test('must be equals', () => {

        const message = 'Hi there!'

        const otherMessage = `Hi there!`

        expect(message).toBe(otherMessage)
    })
})

