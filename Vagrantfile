Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "ubuntu-lab-2"
  config.vm.define "lab-2"

  config.vm.network "forwarded_port", guest: 80, host: 3010

  config.vm.provider "virtualbox" do |virtualbox|
    virtualbox.name = "lab-2"
    virtualbox.memory = 2048
    virtualbox.cpus = 2
  end

  config.vm.provision "shell", path: "provision.sh"
end
