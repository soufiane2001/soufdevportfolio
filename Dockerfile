# Dockerfile
FROM php:8.2-apache

# Install required PHP extensions and enable mod_rewrite for Apache
RUN docker-php-ext-install mysqli pdo pdo_mysql && \
    a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy the current directory contents into the container
COPY . /var/www/html

# Set permissions (optional)
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Expose port 80 for the Apache server
EXPOSE 80
