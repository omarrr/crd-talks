class AddHtmlToTalk < ActiveRecord::Migration
  def self.up
    add_column :talks, :html, :text
  end

  def self.down
    remove_column :talks, :html
  end
end
