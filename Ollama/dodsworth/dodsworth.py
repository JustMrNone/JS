import ollama 


response = ollama.chat(
    model='Dodsworth:latest',
    messages=[{
        'role': 'user',
        'content': 'How is hanging?',
    }]
)

print(response)