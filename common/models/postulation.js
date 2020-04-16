'use strict';

module.exports = function(Student) {

    Student.observe('after save', function(ctx, next) {
        if(ctx.instance){
            Student.updateAll({id: ctx.instance.id}, {
                updateAt: new Date(),
            });
        }
        next();
    });

};
