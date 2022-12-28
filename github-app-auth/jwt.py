import os
import jwt
from datetime import datetime, timedelta

iat = datetime.utcnow()
exp = iat + timedelta(seconds = 60)

token=jwt.encode(
    payload={
        'iss': os.environ['APP_ID'],
        'iat': int(iat.timestamp()),
        'exp': int(exp.timestamp())
    },
    key=os.environ['PRIVATE_KEY_PEM'],
    algorithm='RS256'
).decode('UTF-8')

print(token)
