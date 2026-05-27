FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install flask pdfplumber nltk

EXPOSE 7000

CMD ["python", "app.py"]