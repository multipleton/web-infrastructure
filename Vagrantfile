Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "ubuntu-web-infrastructure"
  config.vm.define "web-infrastructure"

  config.vm.network "forwarded_port", guest: 80, host: 3010

  config.vm.provider "virtualbox" do |virtualbox|
    virtualbox.name = "web-infrastructure"
    virtualbox.memory = 2048
    virtualbox.cpus = 2
  end

  config.vm.provision "shell", path: "provision.sh"
end
