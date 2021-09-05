FROM texture/python-yarn:latest
COPY requirements.txt .

# Set the working directory to /web
WORKDIR /web

# Copy the current directory contents into the container at /web
ADD . /web
RUN mkdir /web/web/templates

# Install python packages
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Install node packages
RUN yarn --cwd /web/minerva-referral
RUN yarn --cwd /web/minerva-referral-login

# Build frontend pages
RUN cd /web/minerva-referral && yarn build
RUN cd /web/minerva-referral-login && yarn build

# Make port 5000 available to the world outside this container
EXPOSE 8000

# Run app.py when the container launches
CMD ["gunicorn", "-b", "0.0.0.0", "web:app"]