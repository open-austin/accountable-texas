# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.require_version ">= 1.6.0"
Vagrant.configure(2) do |config|
  # https://docs.vagrantup.com.

  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/xenial64"
  config.vm.hostname = "inftx.dev.local.net"

  # Create a forwarded port mapping which allows access to a specific port
  config.vm.network "forwarded_port", guest: 5120, host: 5120

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "172.16.13.7", virtualbox__intnet: "mynet"

  # Create a public network, which generally matched to bridged network.
  # config.vm.network "public_network"

  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
 
    # Customize the amount of memory on the VM:
    vb.memory = "2048"
    vb.cpus   = "2"
  end

  # Install pre-reqs
  config.vm.provision "shell", :privileged => true, inline: <<-SHELL
    apt-get update
    apt-get install -y python-minimal
  SHELL
  
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "../ansible/inventory/vagrant/playbook.yml"
  end

  # Install application
  config.vm.provision "shell", :privileged => true, inline: <<-SHELL
    source /vagrant/env.sh
    docker-compose -f docker-compose.build up --build --force-recreate -d
  SHELL

end

