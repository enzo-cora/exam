
if($args[0] -eq "dev"){
	docker-compose up
}
elseif($args[0] -eq "install"){
	docker-compose -f docker-compose.builder.yml run --rm install_api
}
elseif($args[0] -eq "volume"){
	docker volume create  mongoCourse
}
elseif($args[0] -eq "reset"){
	 docker-compose down -v --rmi "all"
}


