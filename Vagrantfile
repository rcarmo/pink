# -*- mode: ruby -*-
# vi: set ft=ruby :

# Default setup for VM development
Vagrant.configure("2") do |config|
  config.vm.box = "wheezy64"
  config.vm.network :forwarded_port, guest: 8000, host: 8000
end
