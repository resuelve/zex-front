if [ -z "$(byobu list-sessions | grep zex)" ]
then
  byobu new-session -d -t zex
  byobu rename-window zex
  byobu select-window -t zex:0
  byobu send-keys 'make dev.server' Enter
  byobu split-window -h
  byobu send-keys 'make dev.browsersync' Enter
fi
byobu attach -t zex
